function clamp(min, input, max) {
    return Math.max(min, Math.min(input, max))
  }
  
  function mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  }
  
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end
  }
  
  function truncate(value, decimals) {
    return parseFloat(value.toFixed(decimals))
  }
  
  const Maths = { lerp, clamp, mapRange, truncate }
  
  export { lerp, clamp, mapRange, truncate }
  export default Maths