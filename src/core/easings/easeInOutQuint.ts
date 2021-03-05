/**
 * easeInOutQuint
 * 
 * @param {number} t represents the absolute progress of the animation in the bounds of 0 (beginning of the animation) and 1 (end of animation).
 * 
 * @return {number} timing function
 * 
 * @since 3.0.0
 */
export const easeInOutQuint = (t: number): number => {
	return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
};
export default easeInOutQuint;
