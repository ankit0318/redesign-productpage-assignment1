# Google Maps Integration Documentation

## Overview

This document outlines the implementation of a Google Maps integration in the "Our Head Office" section of the Contact Form component. The implementation allows for displaying the office location on an interactive map using the Google Maps JavaScript API.

## Files Modified/Created

1. **Created new component file**:

    - `src/components/shared/GoogleMap/index.tsx`

2. **Modified existing file**:

    - `src/views/Home/components/ContactForm.tsx`

3. **Added environment configuration file**:
    - `.env`

## Implementation Details

### 1. Google Maps Component (`src/components/shared/GoogleMap/index.tsx`)

**What**: Created a reusable React component that wraps the Google Maps JavaScript API.

**Why**:

-   Provides a more React-friendly way to integrate Google Maps
-   Enables better error handling and fallbacks
-   Makes it easy to reuse map functionality across the application
-   Allows for customization of map markers and controls

**Key Features**:

-   Uses `@react-google-maps/api` library for React integration
-   Includes a clean fallback UI when API isn't available/errors occur
-   Supports environment variable configuration for API key
-   Provides a loading state with animation
-   Implements a custom styled marker for the office location
-   Configurable zoom level and map center coordinates

### 2. Contact Form Update (`src/views/Home/components/ContactForm.tsx`)

**What**: Replaced the static placeholder image with our interactive Google Map component.

**Why**:

-   Enhances user experience with an interactive map
-   Provides better context for the office location
-   Aligns with modern web application expectations
-   Maintains the clean UI design with overlay information

**Changes Made**:

-   Imported the new GoogleMapComponent
-   Configured it with specific coordinates (28.4595° N, 77.0295° E)
-   Set appropriate zoom level (14) for neighborhood context
-   Added a noscript fallback for users with JavaScript disabled
-   Preserved the existing overlay card with office information

### 3. Environment Configuration (`.env`)

**What**: Added environment variable configuration for the Google Maps API key.

**Why**:

-   Security best practice to keep API keys out of source code
-   Allows for different keys in development and production environments
-   Makes it easy to update the key without changing code
-   Follows Vite's recommended approach for environment variables

**Configuration**:

-   Added `VITE_GOOGLE_MAPS_API_KEY` environment variable
-   Used Vite's `import.meta.env` approach for accessing the key

## Usage Instructions

1. **Setting up the API Key**:

    - Obtain a Google Maps JavaScript API key from the [Google Cloud Console](https://console.cloud.google.com/)
    - Enable both "Maps JavaScript API" and "Static Maps API" for your project
    - Add your API key to the `.env` file:
        ```
        VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
        ```

2. **Customizing the Map**:
    - To change the location, update the center coordinates in ContactForm.tsx
    - To adjust the zoom level, modify the zoom prop (higher numbers = more zoomed in)
    - For additional map customization, refer to the [react-google-maps/api documentation](https://react-google-maps-api-docs.netlify.app/)

## Fallback Mechanism

The implementation includes a graceful fallback system:

1. If the Google Maps API fails to load (invalid key, network issues, etc.), a styled fallback UI appears
2. For users with JavaScript disabled, a static map image is provided via the noscript tag
3. If the API key is missing, the component will still render with the fallback UI rather than throwing errors

## Future Improvements

Potential enhancements that could be made in the future:

1. Add custom info windows with additional office details
2. Implement directions functionality
3. Add multiple office locations if needed
4. Create a more detailed map with nearby points of interest
5. Implement dark mode support for the map
