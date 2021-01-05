initSidebarItems({"struct":[["Parts","Holds the GPIO Port peripheral and broken out pin instances"],["Pin","Represents a GPIO pin with a corresponding `PinId` and `PinMode`"],["Port","Opaque port reference"]],"trait":[["GpioExt","The GpioExt trait allows splitting the PORT hardware into its constituent pin parts."],["IntoFunction","A trait that makes it easier to generically manage converting a pin from its current state into some other functional mode.  The configuration change requires exclusive access to the Port hardware, which is why this isn't simply the standard `Into` trait."]],"type":[["Floating","Floating Input"],["Input","Represents a pin configured for input. The MODE type is typically one of `Floating`, `PullDown` or `PullUp`."],["OpenDrain","Open drain output. The SAMD5x/E5x chips don't actually have open drain outputs. This option was added by mistake. It is currently an alias of `PushPull`"],["Output","Represents a pin configured for output. The MODE type is typically one of `PushPull`, or `OpenDrain`."],["Pa0","Represents the IO pin with the matching name"],["Pa1","Represents the IO pin with the matching name"],["Pa10","Represents the IO pin with the matching name"],["Pa11","Represents the IO pin with the matching name"],["Pa12","Represents the IO pin with the matching name"],["Pa13","Represents the IO pin with the matching name"],["Pa14","Represents the IO pin with the matching name"],["Pa15","Represents the IO pin with the matching name"],["Pa16","Represents the IO pin with the matching name"],["Pa17","Represents the IO pin with the matching name"],["Pa18","Represents the IO pin with the matching name"],["Pa19","Represents the IO pin with the matching name"],["Pa2","Represents the IO pin with the matching name"],["Pa20","Represents the IO pin with the matching name"],["Pa21","Represents the IO pin with the matching name"],["Pa22","Represents the IO pin with the matching name"],["Pa23","Represents the IO pin with the matching name"],["Pa24","Represents the IO pin with the matching name"],["Pa25","Represents the IO pin with the matching name"],["Pa27","Represents the IO pin with the matching name"],["Pa3","Represents the IO pin with the matching name"],["Pa30","Represents the IO pin with the matching name"],["Pa31","Represents the IO pin with the matching name"],["Pa4","Represents the IO pin with the matching name"],["Pa5","Represents the IO pin with the matching name"],["Pa6","Represents the IO pin with the matching name"],["Pa7","Represents the IO pin with the matching name"],["Pa8","Represents the IO pin with the matching name"],["Pa9","Represents the IO pin with the matching name"],["Pb0","Represents the IO pin with the matching name"],["Pb1","Represents the IO pin with the matching name"],["Pb10","Represents the IO pin with the matching name"],["Pb11","Represents the IO pin with the matching name"],["Pb12","Represents the IO pin with the matching name"],["Pb13","Represents the IO pin with the matching name"],["Pb14","Represents the IO pin with the matching name"],["Pb15","Represents the IO pin with the matching name"],["Pb16","Represents the IO pin with the matching name"],["Pb17","Represents the IO pin with the matching name"],["Pb2","Represents the IO pin with the matching name"],["Pb22","Represents the IO pin with the matching name"],["Pb23","Represents the IO pin with the matching name"],["Pb3","Represents the IO pin with the matching name"],["Pb30","Represents the IO pin with the matching name"],["Pb31","Represents the IO pin with the matching name"],["Pb4","Represents the IO pin with the matching name"],["Pb5","Represents the IO pin with the matching name"],["Pb6","Represents the IO pin with the matching name"],["Pb7","Represents the IO pin with the matching name"],["Pb8","Represents the IO pin with the matching name"],["Pb9","Represents the IO pin with the matching name"],["PfA","Peripheral Function A"],["PfB","Peripheral Function B"],["PfC","Peripheral Function C"],["PfD","Peripheral Function D"],["PfE","Peripheral Function E"],["PfF","Peripheral Function F"],["PfG","Peripheral Function G"],["PfH","Peripheral Function H"],["PfI","Peripheral Function I"],["PfJ","Peripheral Function J"],["PfK","Peripheral Function K"],["PfL","Peripheral Function L"],["PfM","Peripheral Function M"],["PfN","Peripheral Function N"],["PullDown","Pulled down Input"],["PullUp","Pulled up Input"],["PushPull","Totem Pole aka Push-Pull"],["ReadableOpenDrain","Open drain output, which can be read when not driven The SAMD5x/E5x chips don't actually have open drain outputs. This option actually represents a readable `PushPull` output"]]});