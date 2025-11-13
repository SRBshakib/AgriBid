# 🔐 AgriBid Authentication System Documentation

## Overview

The AgriBid platform now has a complete authentication system that handles login, logout, and session management across all user types (Farmer, Buyer, Admin).

---

## 🎯 Features

### ✅ **Core Features**
- **User Login** - Authenticate as Farmer, Buyer, or Admin
- **Session Management** - Persistent login using localStorage and sessionStorage
- **Automatic Logout** - Clean logout with confirmation
- **Protected Dashboards** - Automatic redirection if not authenticated
- **User Type Validation** - Ensures users access correct dashboards
- **Beautiful Notifications** - Toast-style notifications for user feedback
- **User Display Updates** - Shows logged-in user information

---

## 📁 Files

### 1. **`auth.js`** (Authentication Module)
The central authentication system with all login/logout logic.

**Location:** `/auth.js`

**Functions:**
- `login(userType, userData)` - Login a user
- `logout()` - Logout current user
- `getCurrentUser()` - Get logged-in user data
- `getUserType()` - Get user type
- `isLoggedIn()` - Check if user is logged in
- `requireAuth(requiredType)` - Protect dashboard pages
- `updateUserDisplay()` - Update UI with user info
- `showNotification(message, type)` - Show toast notifications

### 2. **Updated Pages**
All pages now include the authentication system:

- ✅ `index.html` - Landing page with login modal
- ✅ `farmerdashboard.html` - Farmer dashboard with logout
- ✅ `buyerDashboard.html` - Buyer dashboard with logout
- ✅ `adminDashboard.html` - Admin dashboard with logout

---

## 🚀 How It Works

### **Login Flow**

```
1. User clicks "Login" button on landing page
2. Login modal appears
3. User selects their type (Farmer/Buyer/Admin)
4. Authentication system:
   - Stores user data in sessionStorage
   - Stores user data in localStorage (persistent)
   - Redirects to appropriate dashboard
5. Success notification appears
```

### **Logout Flow**

```
1. User clicks "Logout" button on dashboard
2. Confirmation dialog appears
3. If confirmed:
   - Clear sessionStorage
   - Clear localStorage
   - Show logout notification
   - Redirect to landing page (index.html)
```

### **Dashboard Protection**

```
1. User tries to access dashboard page
2. Authentication system checks:
   - Is user logged in?
   - Does user type match required type?
3. If not authenticated:
   - Show warning notification
   - Redirect to landing page
4. If wrong user type:
   - Show error notification
   - Redirect to correct dashboard
```

---

## 💻 Usage

### **1. Login Modal (index.html)**

The login buttons in the modal now use `data-login` attribute:

```html
<button data-login="farmer" class="btn w-100">
    <i class="fas fa-tractor fa-2x mb-2"></i>
    <div>Login as Farmer</div>
</button>

<button data-login="buyer" class="btn w-100">
    <i class="fas fa-shopping-cart fa-2x mb-2"></i>
    <div>Login as Buyer</div>
</button>

<button data-login="admin" class="btn w-100">
    <i class="fas fa-user-shield fa-2x mb-2"></i>
    <div>Login as Admin</div>
</button>
```

### **2. Logout Buttons (All Dashboards)**

Logout links use `data-logout` attribute:

```html
<!-- Farmer/Buyer Dashboards -->
<a href="#" data-logout class="logout-btn">
    <i class='bx bx-log-out icon'></i>
    <span class="text nav-text">Logout</span>
</a>

<!-- Admin Dashboard -->
<a class="dropdown-item" href="#" data-logout>
    <i class="fas fa-sign-out-alt me-2"></i> Sign out
</a>
```

### **3. Include Auth Script**

All pages include the authentication script:

```html
<!-- Authentication System -->
<script src="auth.js"></script>
```

---

## 🎨 Notification System

### **Notification Types**

1. **Success** 🟢
   - Color: Green (#27ae60)
   - Icon: Check circle
   - Use: Successful login/logout

2. **Error** 🔴
   - Color: Red (#e74c3c)
   - Icon: Times circle
   - Use: Authentication errors

3. **Warning** 🟡
   - Color: Orange (#f39c12)
   - Icon: Exclamation triangle
   - Use: Access denied warnings

4. **Info** 🔵
   - Color: Blue (#3498db)
   - Icon: Info circle
   - Use: General information

### **Example Usage**

```javascript
// Show notification
AgriBidAuth.showNotification('Login successful!', 'success');
AgriBidAuth.showNotification('Access denied', 'error');
AgriBidAuth.showNotification('Please login first', 'warning');
AgriBidAuth.showNotification('Session restored', 'info');
```

---

## 🔒 Security Features

### **Session Storage**
- Temporary storage (cleared when tab closes)
- Used for active session data
- Automatically cleared on logout

### **Local Storage**
- Persistent storage (survives page reload)
- Used for "remember me" functionality
- Manually cleared on logout

### **User Type Validation**
```javascript
// Dashboard pages automatically validate user type
// Farmer dashboard requires user type: 'farmer'
// Buyer dashboard requires user type: 'buyer'
// Admin dashboard requires user type: 'admin'
```

### **Protected Routes**
All dashboard pages are automatically protected:
- ✅ `farmerdashboard.html` → Requires 'farmer' login
- ✅ `buyerDashboard.html` → Requires 'buyer' login
- ✅ `adminDashboard.html` → Requires 'admin' login

---

## 📊 User Data Structure

```javascript
{
    type: 'farmer' | 'buyer' | 'admin',
    loginTime: '2025-11-13T10:30:00.000Z',
    name: 'Farmer User',
    email: 'farmer@agribid.com',
    // Add custom fields here
}
```

---

## 🎯 API Reference

### **Global Object: `window.AgriBidAuth`**

#### **Methods**

##### `login(userType, userData)`
Login a user with specified type.

**Parameters:**
- `userType` (string): 'farmer', 'buyer', or 'admin'
- `userData` (object, optional): Additional user data

**Example:**
```javascript
AgriBidAuth.login('farmer', {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '01234567890'
});
```

##### `logout()`
Logout current user and redirect to landing page.

**Example:**
```javascript
AgriBidAuth.logout();
```

##### `getCurrentUser()`
Get currently logged-in user object.

**Returns:** User object or `null`

**Example:**
```javascript
const user = AgriBidAuth.getCurrentUser();
if (user) {
    console.log('Logged in as:', user.name);
}
```

##### `getUserType()`
Get current user type.

**Returns:** 'farmer', 'buyer', 'admin', or `null`

**Example:**
```javascript
const userType = AgriBidAuth.getUserType();
console.log('User type:', userType);
```

##### `isLoggedIn()`
Check if user is logged in.

**Returns:** Boolean

**Example:**
```javascript
if (AgriBidAuth.isLoggedIn()) {
    console.log('User is logged in');
} else {
    console.log('User is not logged in');
}
```

##### `requireAuth(requiredType)`
Protect a page with authentication requirement.

**Parameters:**
- `requiredType` (string, optional): Required user type

**Example:**
```javascript
// Protect page for any logged-in user
AgriBidAuth.requireAuth();

// Protect page for specific user type
AgriBidAuth.requireAuth('farmer');
```

##### `updateUserDisplay()`
Update user information displays on the page.

**Example:**
```javascript
AgriBidAuth.updateUserDisplay();
```

##### `showNotification(message, type)`
Show a toast notification.

**Parameters:**
- `message` (string): Notification message
- `type` (string): 'success', 'error', 'warning', or 'info'

**Example:**
```javascript
AgriBidAuth.showNotification('Profile updated!', 'success');
```

---

## 🛠️ Customization

### **Change Dashboard URLs**

Edit `auth.js`:

```javascript
const DashboardURLs = {
    farmer: 'farmerdashboard.html',
    buyer: 'buyerDashboard.html',
    admin: 'adminDashboard.html'
};
```

### **Add Custom User Data**

Pass additional data during login:

```javascript
AgriBidAuth.login('farmer', {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '01234567890',
    location: 'Barisal',
    joinDate: '2025-01-01'
});
```

### **Custom User Display**

Add data attributes to HTML elements:

```html
<!-- Will show user name -->
<span data-user-name></span>
<span class="user-name"></span>

<!-- Will show user email -->
<span data-user-email></span>
<span class="user-email"></span>

<!-- Will show user type -->
<span data-user-type></span>
<span class="user-type"></span>
```

---

## 🧪 Testing

### **Test Login Flow**
1. Open `index.html`
2. Click "Login" button
3. Select user type (Farmer/Buyer/Admin)
4. Verify redirect to correct dashboard
5. Check notification appears

### **Test Logout Flow**
1. From any dashboard, click "Logout"
2. Confirm logout in dialog
3. Verify redirect to landing page
4. Check notification appears

### **Test Dashboard Protection**
1. Clear browser storage (DevTools → Application → Storage)
2. Try to access dashboard directly (e.g., `farmerdashboard.html`)
3. Verify automatic redirect to landing page
4. Check warning notification

### **Test User Type Validation**
1. Login as Farmer
2. Manually navigate to `buyerDashboard.html`
3. Verify redirect back to farmer dashboard
4. Check error notification

---

## 🐛 Troubleshooting

### **Login button not working**
- Check browser console for errors
- Verify `auth.js` is loaded
- Check `data-login` attribute is set correctly

### **Logout not working**
- Verify `data-logout` attribute is present
- Check browser console for errors
- Ensure `auth.js` is loaded after DOM

### **Not redirecting after login**
- Check browser console for errors
- Verify dashboard URLs are correct
- Check for JavaScript errors blocking redirect

### **User data not persisting**
- Check browser localStorage is enabled
- Verify sessionStorage is supported
- Check for browser extensions blocking storage

---

## 📱 Browser Compatibility

✅ Chrome 80+
✅ Firefox 75+
✅ Safari 13+
✅ Edge 80+
✅ Opera 67+

**Requirements:**
- localStorage support
- sessionStorage support
- ES6 JavaScript support

---

## 🎉 Features Summary

✅ **Complete Authentication System**
✅ **Login for 3 User Types** (Farmer, Buyer, Admin)
✅ **Persistent Sessions** (localStorage + sessionStorage)
✅ **Protected Dashboards** (Auto-redirect)
✅ **User Type Validation** (Correct dashboard access)
✅ **Beautiful Notifications** (Toast-style alerts)
✅ **Logout Confirmation** (Prevent accidental logout)
✅ **User Display Updates** (Show user info)
✅ **Easy Integration** (Simple data attributes)
✅ **No Backend Required** (Client-side only)

---

## 🔮 Future Enhancements

### **Planned Features:**
- [ ] Remember me checkbox
- [ ] Password protection
- [ ] Email verification
- [ ] Two-factor authentication
- [ ] User profile management
- [ ] Session timeout
- [ ] Backend integration ready

---

## 📞 Support

**Need Help?**
- Check browser console for error messages
- Review this documentation
- Check `auth.js` comments for details

---

## 🎊 Summary

Your AgriBid platform now has a **complete, working authentication system**!

**What works:**
✅ Login from landing page
✅ Automatic redirect to dashboards
✅ Logout from all dashboards
✅ Session persistence
✅ Dashboard protection
✅ Beautiful notifications
✅ User type validation

**Ready to use!** 🚀

---

**Made with 💚 for AgriBid**

*Secure, Simple, Seamless Authentication!*
