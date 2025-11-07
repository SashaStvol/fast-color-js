# Examples

## Browser Demo
Open `browser.html` in a web browser to see:
- Real-time color conversions
- Random color generation  
- Color palette creation
- Performance benchmarks
- Interactive color picker

## Node.js Examples
Run `node examples/node.js` to see:
- Basic color conversions
- HEX validation
- Color generation algorithms
- Performance testing
- Image processing simulation
- Advanced HSV/RGB features

## Quick Start

### Browser
```html
<script type="module">
    import { Color } from '../src/Color.js';
    
    // Convert HEX to RGB
    const rgb = Color.hexToRgb('#ff8040');
    console.log(rgb); // {r: 255, g: 128, b: 64}
</script>