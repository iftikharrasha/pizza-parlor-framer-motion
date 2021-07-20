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

