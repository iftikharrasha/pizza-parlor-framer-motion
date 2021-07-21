The whole playlist: https://www.youtube.com/playlist?list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i


### `Note`

motion.element

initial: from
animate: to

animate: {{object}}

x: positive -> right
x: negative -> left
y: negative -> up
x: positive -> down

Exp: 
initial={{ x: '-100vw' }}
Here, 100vw is a string
if we write 100 no need to add ''

###### transitions

type: spring(default)

spring can have stiffness!

other type: tween

transitions: type: 'spring', stiffness: 120, delay: 0.2, duration: 1.5, mass: 0.4, damping: 8

Remember, x: 0 means the original position, not the left = 0

Another power of transition property is to use is for orchastration, which means we can tell the dom when the animation will occur, like afterChinldren or before children, more example on variants.

staggerChildren: is the children of the children, the grandchildren of a parent, one after another effect

Also, we can use mass and damping that works like physics and it only works on spring transition

###### Hover

whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}

Here, originX is 0 because default value takes it left


###### variants

1. parent variant motion works in children motions
2. cleaner code because single object motion is

cosnt classVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x:0,
        transitions: {
            type: 'spring',
            when: "beforeChildren"
        }
    }
}

variants={classVariants} initial="hidden" animate="visible"

Note: the transition will be written inside visible(animate)
Also, if we use the variant in parent, no need to write initial and animate in child


###### keyframes

scale: [1, 1.1, 1, 1.1, 1, 1.1, 1]

each points represents different keyframes, we can use this array for other styles too


###### repeated animations - continuous

what if we need to use infinitely times animations?

instead of using scale manually we can shorthand it by using yoyo transition

scale: 1.1

transition:{
    yoyo: 10/infinity
}

10 is for 10 times or we can use infinity


###### animation presence

what if we want to go off of the page but not so fast, like faded

<AnimatePresence>Wrap up the whole conditional element here</AnimatePresence>
then inside the motion.element we use an exit= {{ which tells us how to fade out }}


###### animating routes

1. idea starts with animate presence
2. we need to surround switch with AnimatePresence to give it an exit presence
3. but AnimatePresence doesn't know when our route changes we need to tell it what
4. by useLocation hook we can do that, const location = useLocation();
5. this tells us what our route location is and store it in location const location
6. <Switch location={location} key={location.key}></switch> now AnimatePresence knows when it changes
7. note if we use <Router> in App.js the useLocation wont work, we have to set <Router> it in index.js
8. now we can go to each components page and play like a hidden and visible animation to begin within
9. We can add an extra exit: transition: {ease: 'easeInOut'} and add exit="exit" to the motion elements
10. make sure to add exitBeforeEnter prop in the <AnimatePresence exitBeforeEnter> or else the next route will overlap

Thats animating a route in 10 steps!


###### modal
Instead of button onClick, we can set anything false when we exit the route like this.

button onClick={() => setShowModal(false)}

AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}



###### SVG animations

use motion.svg to animate the whole svg

use pathLength: 0 or 1 to have a drawlike animation then use or motion.path


###### loader + switching animations

useCycle Hook

we can use two animation and then call useCycle hook to toggle between the animations and

const [anime, cycleAnime] = useCycle("animationOne", "animationTwo");

onClick={() => cycleAnime()}

animate={anime}



###### Dragging items

How to make logo dragable? Man just add the 'drag' prop

motion.div className="logo" drag

right now if we drag it can be lost out of the window. How to solve? just add,

dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}

Now, it will spring back to it's original position

dragElastic={0.7} this gives how easy can we drag, the lower the hard to drag