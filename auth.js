/**
 * AgriBid Authentication System
 * Handles login, logout, and session management
 */

// Session storage keys
const AUTH_KEY = 'agribid_user';
const USER_TYPE_KEY = 'agribid_user_type';

/**
 * User Types
 */
const UserTypes = {
    FARMER: 'farmer',
    BUYER: 'buyer',
    ADMIN: 'admin'
};

/**
 * Dashboard URLs for each user type
 */
const DashboardURLs = {
    farmer: 'farmerdashboard.html',
    buyer: 'buyerDashboard.html',
    admin: 'adminDashboard.html'
};

/**
 * Login user with specified type
 * @param {string} userType - Type of user (farmer, buyer, admin)
 * @param {object} userData - Optional user data
 */
function login(userType, userData = {}) {
    // Set default user data
    const user = {
        type: userType,
        loginTime: new Date().toISOString(),
        name: userData.name || `${userType.charAt(0).toUpperCase() + userType.slice(1)} User`,
        email: userData.email || `${userType}@agribid.com`,
        ...userData
    };

    // Store in session storage
    sessionStorage.setItem(AUTH_KEY, JSON.stringify(user));
    sessionStorage.setItem(USER_TYPE_KEY, userType);

    // Also store in localStorage for persistent login
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    localStorage.setItem(USER_TYPE_KEY, userType);

    console.log('✅ User logged in:', user);

    // Redirect to dashboard
    const dashboardUrl = DashboardURLs[userType];
    if (dashboardUrl) {
        window.location.href = dashboardUrl;
    }
}

/**
 * Logout current user
 */
function logout() {
    // Clear session storage
    sessionStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem(USER_TYPE_KEY);

    // Clear local storage
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_TYPE_KEY);

    console.log('👋 User logged out');

    // Show logout notification
    showNotification('Logged out successfully', 'success');

    // Redirect to landing page after a short delay
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

/**
 * Get current logged in user
 * @returns {object|null} User object or null if not logged in
 */
function getCurrentUser() {
    // Check session storage first
    let userStr = sessionStorage.getItem(AUTH_KEY);
    
    // If not in session, check local storage
    if (!userStr) {
        userStr = localStorage.getItem(AUTH_KEY);
        if (userStr) {
            // Restore to session storage
            sessionStorage.setItem(AUTH_KEY, userStr);
            const userType = localStorage.getItem(USER_TYPE_KEY);
            sessionStorage.setItem(USER_TYPE_KEY, userType);
        }
    }

    if (userStr) {
        try {
            return JSON.parse(userStr);
        } catch (e) {
            console.error('Error parsing user data:', e);
            return null;
        }
    }
    return null;
}

/**
 * Get current user type
 * @returns {string|null} User type or null if not logged in
 */
function getUserType() {
    return sessionStorage.getItem(USER_TYPE_KEY) || localStorage.getItem(USER_TYPE_KEY);
}

/**
 * Check if user is logged in
 * @returns {boolean} True if logged in
 */
function isLoggedIn() {
    return getCurrentUser() !== null;
}

/**
 * Require authentication for dashboard pages
 * @param {string} requiredType - Required user type (optional)
 */
function requireAuth(requiredType = null) {
    const user = getCurrentUser();
    
    if (!user) {
        // Not logged in, redirect to landing page
        console.warn('⚠️ Access denied: Not logged in');
        showNotification('Please login to access this page', 'warning');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
        return false;
    }

    // Check if specific user type is required
    if (requiredType && user.type !== requiredType) {
        console.warn(`⚠️ Access denied: Required ${requiredType}, but user is ${user.type}`);
        showNotification('Access denied: Incorrect user type', 'error');
        setTimeout(() => {
            window.location.href = DashboardURLs[user.type];
        }, 1000);
        return false;
    }

    return true;
}

/**
 * Update user display on page load
 */
function updateUserDisplay() {
    const user = getCurrentUser();
    
    if (user) {
        // Update user name displays
        const nameElements = document.querySelectorAll('.user-name, [data-user-name]');
        nameElements.forEach(el => {
            el.textContent = user.name;
        });

        // Update user email displays
        const emailElements = document.querySelectorAll('.user-email, [data-user-email]');
        emailElements.forEach(el => {
            el.textContent = user.email;
        });

        // Update user type displays
        const typeElements = document.querySelectorAll('.user-type, [data-user-type]');
        typeElements.forEach(el => {
            el.textContent = user.type.charAt(0).toUpperCase() + user.type.slice(1);
        });

        console.log('✅ User display updated');
    }
}

/**
 * Show notification message
 * @param {string} message - Notification message
 * @param {string} type - Notification type (success, error, warning, info)
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `agribid-notification agribid-notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles if not already added
    if (!document.getElementById('agribid-notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'agribid-notification-styles';
        styles.textContent = `
            .agribid-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                padding: 15px 20px;
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                min-width: 250px;
            }
            .agribid-notification-success { border-left: 4px solid #27ae60; }
            .agribid-notification-error { border-left: 4px solid #e74c3c; }
            .agribid-notification-warning { border-left: 4px solid #f39c12; }
            .agribid-notification-info { border-left: 4px solid #3498db; }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .notification-content i {
                font-size: 1.2rem;
            }
            .agribid-notification-success i { color: #27ae60; }
            .agribid-notification-error i { color: #e74c3c; }
            .agribid-notification-warning i { color: #f39c12; }
            .agribid-notification-info i { color: #3498db; }
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styles);
    }

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

/**
 * Get notification icon based on type
 */
function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'times-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

/**
 * Initialize authentication on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌾 AgriBid Authentication System Initialized');

    // Update user display if logged in
    updateUserDisplay();

    // Setup logout buttons
    const logoutButtons = document.querySelectorAll('[data-logout], .logout-btn, a[href*="logout"]');
    logoutButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                logout();
            }
        });
    });

    // Setup login modal buttons
    const loginButtons = document.querySelectorAll('[data-login]');
    loginButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const userType = this.getAttribute('data-login');
            if (userType) {
                login(userType);
            }
        });
    });

    // Check if current page is a dashboard and require auth
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage.includes('dashboard') || currentPage.includes('Dashboard')) {
        const pageType = currentPage.includes('farmer') ? 'farmer' : 
                        currentPage.includes('buyer') ? 'buyer' : 
                        currentPage.includes('admin') ? 'admin' : null;
        
        if (pageType) {
            requireAuth(pageType);
        }
    }
});

// Export functions for global use
window.AgriBidAuth = {
    login,
    logout,
    getCurrentUser,
    getUserType,
    isLoggedIn,
    requireAuth,
    updateUserDisplay,
    showNotification,
    UserTypes,
    DashboardURLs
};

console.log('✅ AgriBid Authentication Module Loaded');
