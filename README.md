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

transitions: type: 'spring', stiffness: 120, delay: 0.2, duration: 1.5

Remember, x: 0 means the original position, not the left = 0


###### Hover

whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}

Here, originX is 0 because default value takes it left
