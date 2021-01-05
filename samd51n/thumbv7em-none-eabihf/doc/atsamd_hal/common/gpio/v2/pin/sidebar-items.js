initSidebarItems({"enum":[["A","Type-level variant of [`AlternateConfig`] for alternate peripheral function A"],["B","Type-level variant of [`AlternateConfig`] for alternate peripheral function B"],["C","Type-level variant of [`AlternateConfig`] for alternate peripheral function C"],["D","Type-level variant of [`AlternateConfig`] for alternate peripheral function D"],["E","Type-level variant of [`AlternateConfig`] for alternate peripheral function E"],["F","Type-level variant of [`AlternateConfig`] for alternate peripheral function F"],["Floating","Type-level variant of both [`DisabledConfig`] and [`InputConfig`]"],["G","Type-level variant of [`AlternateConfig`] for alternate peripheral function G"],["GroupA","Type-level variant of `Group`"],["GroupB","Type-level variant of `Group`"],["GroupC","Type-level variant of `Group`"],["H","Type-level variant of [`AlternateConfig`] for alternate peripheral function H"],["I","Type-level variant of [`AlternateConfig`] for alternate peripheral function I"],["J","Type-level variant of [`AlternateConfig`] for alternate peripheral function J"],["K","Type-level variant of [`AlternateConfig`] for alternate peripheral function K"],["L","Type-level variant of [`AlternateConfig`] for alternate peripheral function L"],["M","Type-level variant of [`AlternateConfig`] for alternate peripheral function M"],["N","Type-level variant of [`AlternateConfig`] for alternate peripheral function N"],["PA00","Pin ID representing pin PA00"],["PA01","Pin ID representing pin PA01"],["PA02","Pin ID representing pin PA02"],["PA03","Pin ID representing pin PA03"],["PA04","Pin ID representing pin PA04"],["PA05","Pin ID representing pin PA05"],["PA06","Pin ID representing pin PA06"],["PA07","Pin ID representing pin PA07"],["PA08","Pin ID representing pin PA08"],["PA09","Pin ID representing pin PA09"],["PA10","Pin ID representing pin PA10"],["PA11","Pin ID representing pin PA11"],["PA12","Pin ID representing pin PA12"],["PA13","Pin ID representing pin PA13"],["PA14","Pin ID representing pin PA14"],["PA15","Pin ID representing pin PA15"],["PA16","Pin ID representing pin PA16"],["PA17","Pin ID representing pin PA17"],["PA18","Pin ID representing pin PA18"],["PA19","Pin ID representing pin PA19"],["PA20","Pin ID representing pin PA20"],["PA21","Pin ID representing pin PA21"],["PA22","Pin ID representing pin PA22"],["PA23","Pin ID representing pin PA23"],["PA24","Pin ID representing pin PA24"],["PA25","Pin ID representing pin PA25"],["PA27","Pin ID representing pin PA27"],["PA30","Pin ID representing pin PA30"],["PA31","Pin ID representing pin PA31"],["PB00","Pin ID representing pin PB00"],["PB01","Pin ID representing pin PB01"],["PB02","Pin ID representing pin PB02"],["PB03","Pin ID representing pin PB03"],["PB04","Pin ID representing pin PB04"],["PB05","Pin ID representing pin PB05"],["PB06","Pin ID representing pin PB06"],["PB07","Pin ID representing pin PB07"],["PB08","Pin ID representing pin PB08"],["PB09","Pin ID representing pin PB09"],["PB10","Pin ID representing pin PB10"],["PB11","Pin ID representing pin PB11"],["PB12","Pin ID representing pin PB12"],["PB13","Pin ID representing pin PB13"],["PB14","Pin ID representing pin PB14"],["PB15","Pin ID representing pin PB15"],["PB16","Pin ID representing pin PB16"],["PB17","Pin ID representing pin PB17"],["PB18","Pin ID representing pin PB18"],["PB19","Pin ID representing pin PB19"],["PB20","Pin ID representing pin PB20"],["PB21","Pin ID representing pin PB21"],["PB22","Pin ID representing pin PB22"],["PB23","Pin ID representing pin PB23"],["PB24","Pin ID representing pin PB24"],["PB25","Pin ID representing pin PB25"],["PB30","Pin ID representing pin PB30"],["PB31","Pin ID representing pin PB31"],["PC00","Pin ID representing pin PC00"],["PC01","Pin ID representing pin PC01"],["PC02","Pin ID representing pin PC02"],["PC03","Pin ID representing pin PC03"],["PC05","Pin ID representing pin PC05"],["PC06","Pin ID representing pin PC06"],["PC07","Pin ID representing pin PC07"],["PC10","Pin ID representing pin PC10"],["PC11","Pin ID representing pin PC11"],["PC12","Pin ID representing pin PC12"],["PC13","Pin ID representing pin PC13"],["PC14","Pin ID representing pin PC14"],["PC15","Pin ID representing pin PC15"],["PC16","Pin ID representing pin PC16"],["PC17","Pin ID representing pin PC17"],["PC18","Pin ID representing pin PC18"],["PC19","Pin ID representing pin PC19"],["PC20","Pin ID representing pin PC20"],["PC21","Pin ID representing pin PC21"],["PC24","Pin ID representing pin PC24"],["PC25","Pin ID representing pin PC25"],["PC26","Pin ID representing pin PC26"],["PC27","Pin ID representing pin PC27"],["PC28","Pin ID representing pin PC28"],["PullDown","Type-level variant of both [`DisabledConfig`] and [`InputConfig`]"],["PullUp","Type-level variant of both [`DisabledConfig`] and [`InputConfig`]"],["PushPull","Type-level variant of [`OutputConfig`] for a push-pull configuration"],["Readable","Type-level variant of [`OutputConfig`] for a readable push-pull configuration"]],"struct":[["Alternate","Type-level variant of [`PinMode`] for alternate peripheral functions"],["Disabled","Type-level variant of [`PinMode`] for disabled modes"],["Input","Type-level variant of [`PinMode`] for input modes"],["Output","Type-level variant of [`PinMode`] for output modes"],["Pin","A type-level GPIO pin, parameterized by [`PinId`] and [`PinMode`] types"],["Pins","Collection of all the individual [`Pin`]s"]],"trait":[["AlternateConfig","Type-level `enum` for alternate peripheral function configurations"],["AnyPin","Meta-type representing any [`Pin`]"],["DisabledConfig","Type-level `enum` for disabled configurations"],["InputConfig","Type-level `enum` for input configurations"],["OptionalPin","Meta-type representing an optional [`Pin`]."],["OutputConfig","Type-level `enum` for output configurations"],["PinId","Type-level `enum` for pin IDs"],["PinMode","Type-level `enum` representing pin modes"],["SomePin","Meta-type representing a valid [`Pin`]."]],"type":[["AlternateA","Type-level variant of [`PinMode`] for alternate peripheral function [A]"],["AlternateB","Type-level variant of [`PinMode`] for alternate peripheral function [B]"],["AlternateC","Type-level variant of [`PinMode`] for alternate peripheral function [C]"],["AlternateD","Type-level variant of [`PinMode`] for alternate peripheral function [D]"],["AlternateE","Type-level variant of [`PinMode`] for alternate peripheral function [E]"],["AlternateF","Type-level variant of [`PinMode`] for alternate peripheral function [F]"],["AlternateG","Type-level variant of [`PinMode`] for alternate peripheral function [G]"],["AlternateH","Type-level variant of [`PinMode`] for alternate peripheral function [H]"],["AlternateI","Type-level variant of [`PinMode`] for alternate peripheral function [I]"],["AlternateJ","Type-level variant of [`PinMode`] for alternate peripheral function [J]"],["AlternateK","Type-level variant of [`PinMode`] for alternate peripheral function [K]"],["AlternateL","Type-level variant of [`PinMode`] for alternate peripheral function [L]"],["AlternateM","Type-level variant of [`PinMode`] for alternate peripheral function [M]"],["AlternateN","Type-level variant of [`PinMode`] for alternate peripheral function [N]"],["ConcretePin","Type alias to recover the corresponding concrete [`Pin`] type from a given implementation of [`AnyPin`]"],["FloatingDisabled","Type-level variant of [`PinMode`] for floating disabled mode"],["FloatingInput","Type-level variant of [`PinMode`] for floating input mode"],["PullDownDisabled","Type-level variant of [`PinMode`] for pull-down disabled mode"],["PullDownInput","Type-level variant of [`PinMode`] for pull-down input mode"],["PullUpDisabled","Type-level variant of [`PinMode`] for pull-up disabled mode"],["PullUpInput","Type-level variant of [`PinMode`] for pull-up input mode"],["PushPullOutput","Type-level variant of [`PinMode`] for push-pull output mode"],["ReadableOutput","Type-level variant of [`PinMode`] for readable push-pull output mode"],["Reset","Type alias for the [`PinMode`] at reset"]]});