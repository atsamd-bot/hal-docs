initSidebarItems({"mod":[["dynpin","Type-erased, value-level module for GPIO pinsAlthough the type-level API is generally preferred, it is not suitable in all cases. Because each pin is represented by a distinct type, it is not possible to store multiple pins in a homogeneous data structure. The value-level API solves this problem by erasing the type information and tracking the pin at run-time."],["pin","Type-level module for GPIO pinsThis module provides a type-level API for GPIO pins. It uses the type system to track the state of pins at compile-time. To do so, it uses traits to represent meta-types and types as instances of those meta-types. For example, the trait [`InputConfig`] acts as a type-level `enum` of the available input configurations, and the types [`Floating`], [`PullDown`] and [`PullUp`] are the type-level variants of [`InputConfig`]."]]});