# Task 2: Create Shared Routes Configuration

## Overview

This document outlines the implementation of a shared routes configuration system that simplifies route management by creating a centralized location for routes that need to be accessible to both authorized and unauthorized users. This enhancement improves code maintainability and reduces duplication in the routing system.

## Files Created/Modified

### 1. New Shared Routes Configuration (`src/configs/routes.config/sharedRoutes.ts`)

-   Created a new centralized configuration file for shared routes
-   Implemented a typed array of route objects following the existing project structure
-   Moved the Home page route from individual route files to the shared configuration
-   Added clear comments to facilitate future additions to the shared routes

### 2. Updated Auth Routes (`src/configs/routes.config/authRoute.ts`)

-   Removed duplicated routes that were moved to the shared configuration
-   Simplified the file to contain only authentication-specific routes
-   Maintained consistent typing and structure with the rest of the application

### 3. Updated Main Routes Config (`src/configs/routes.config/routes.config.ts`)

-   Integrated shared routes into both public and protected routes arrays
-   Modified the public routes to include both auth routes and shared routes
-   Updated protected routes to include shared routes alongside other authorized routes
-   Ensured type safety across the routing system

## Key Improvements

### Code Organization

-   Centralized shared routes in a single file, reducing duplication
-   Created a clear separation between route types (auth-specific, protected, and shared)
-   Improved overall code maintainability by establishing a standard location for shared routes

### Developer Experience

-   Simplified the process of adding routes that should be accessible to all users
-   Reduced the need to update multiple files when adding or modifying shared routes
-   Enhanced code readability through proper typing and documentation

### System Architecture

-   Created a more modular and maintainable routing system
-   Established a pattern that can scale as the application grows
-   Reduced potential for errors when updating route configurations

## Implementation Details

### Shared Routes Structure

The shared routes configuration follows the same structure as existing route files, using the `Routes` type from the application's type definitions:

```typescript
const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: `/hello`,
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    // Additional shared routes can be added here
]
```

### Integration with Existing Routes

The shared routes are integrated into both sets of routes:

```typescript
// For public/unauthorized routes
export const publicRoutes: Routes = [...authRoute, ...sharedRoutes]

// For protected/authorized routes
export const protectedRoutes: Routes = [
    // Existing protected routes
    ...othersRoute,
    ...sharedRoutes,
]
```

## Future Recommendations

-   Consider adding a category or metadata system to better organize routes
-   Implement route-based code splitting for better performance
-   Add route-based analytics tracking to measure user engagement with different sections
-   Consider a more granular authority system for routes with mixed access patterns
