# 3D Scroll-Driven Landing Page System

## Overview
This project has been enhanced with a 3D scroll-driven experience featuring a pinned Three.js canvas and smooth section transitions.

## Architecture

### Core Components

#### 1. **PinnedCanvas** (`src/components/three/PinnedCanvas.tsx`)
- Fixed Three.js canvas that stays in place during scroll
- Renders the 3D scene as a background layer
- Uses `fixed inset-0 -z-10 pointer-events-none` for proper positioning

#### 2. **Experience** (`src/components/three/Experience.tsx`)
- Main 3D scene with lighting, geometry, and post-processing
- Features a floating icosahedron with metallic material
- Includes subtle bloom effect for visual polish
- Respects `prefers-reduced-motion` accessibility setting

#### 3. **CameraRig** (`src/components/three/CameraRig.tsx`)
- Handles subtle camera movements based on active section
- Maintains stable base position with minimal lerp offsets
- Always looks at center point (0,0,0)

#### 4. **SectionHost** (`src/components/sections/SectionHost.tsx`)
- Manages all 7 landing page sections
- Computes active section based on scroll position
- Applies framer-motion transitions for smooth section changes
- Non-active sections are dimmed and non-interactive

#### 5. **UI Store** (`src/store/ui.ts`)
- Zustand store for managing active section state
- Provides `activeSection` and `setActiveSection` functions

## Section Order
The system maintains the exact order of your original sections:
1. HeroSection
2. BenefitsSection  
3. HowItWorksSection
4. WhyItWinsSection
5. ZeroHumanEffortsSection
6. PricingSection
7. FAQSection

## Features

### 3D Scene
- **Pinned Canvas**: Fixed viewport position, never scrolls
- **Subtle Camera Movement**: Minimal Y-axis offset based on active section
- **Gentle Animations**: Floating geometry with reduced motion support
- **Post-processing**: Subtle bloom effect for visual enhancement

### Scroll Behavior
- **Section Detection**: Calculates active section from `scrollY / innerHeight`
- **Smooth Transitions**: 0.5s duration with custom easing
- **Performance Optimized**: Passive scroll listeners, efficient state updates

### Accessibility
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Keyboard Navigation**: Maintains focus management
- **Screen Readers**: No content trapped behind overlays

## Performance Considerations

### Canvas Settings
- `dpr={[1, 1.5]}` for optimal device pixel ratio
- `powerPreference: "high-performance"` for GPU acceleration
- Efficient lighting setup (hemisphere + directional only)

### Scroll Performance
- Passive event listeners for smooth scrolling
- Debounced section updates (150ms timeout)
- Minimal DOM manipulation during transitions

## Usage

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Dependencies
- `three` - 3D graphics library
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers and components
- `@react-three/postprocessing` - Post-processing effects
- `framer-motion` - Animation library
- `zustand` - State management

## Customization

### 3D Scene
- Modify `Experience.tsx` to change the 3D objects
- Adjust lighting in the same file
- Customize post-processing effects

### Section Transitions
- Edit `SectionHost.tsx` for different animation styles
- Modify transition duration and easing in framer-motion
- Adjust opacity/scale values for section states

### Camera Behavior
- Update `CameraRig.tsx` for different camera movements
- Change lerp intensity and offset calculations
- Add custom camera animations per section

## Browser Support
- Modern browsers with WebGL support
- Graceful fallback for older browsers
- Mobile-optimized with responsive DPR settings
