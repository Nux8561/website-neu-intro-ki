"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle2, Eye, EyeOff, LucideIcon } from "lucide-react"

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  error?: string
  success?: string
  hint?: string
  leadingIcon?: LucideIcon
  trailingIcon?: LucideIcon
  size?: "sm" | "md" | "lg"
  variant?: "default" | "filled" | "ghost"
}

const sizeClasses = {
  sm: "h-9 text-sm px-3",
  md: "h-11 text-sm px-4",
  lg: "h-12 text-base px-5",
}

const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-5 w-5",
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      error,
      success,
      hint,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      size = "md",
      variant = "default",
      disabled,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement>(null)

    // Merge refs
    React.useImperativeHandle(ref, () => inputRef.current!)

    const isPassword = type === "password"
    const inputType = isPassword && showPassword ? "text" : type

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      props.onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      props.onBlur?.(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0)
      props.onChange?.(e)
    }

    // Check for initial value
    React.useEffect(() => {
      if (inputRef.current) {
        setHasValue(inputRef.current.value.length > 0)
      }
    }, [props.value, props.defaultValue])

    const showFloatingLabel = label && (isFocused || hasValue)

    return (
      <div className="relative w-full">
        {/* Input Container */}
        <motion.div
          className={cn(
            "relative flex items-center rounded-xl transition-colors",
            // Base styles
            "border bg-surface",
            // Focus state
            isFocused && !error && "border-border-active ring-2 ring-white/5",
            // Default state
            !isFocused && !error && !success && "border-border-subtle hover:border-border",
            // Error state
            error && "border-red-500/50 ring-2 ring-red-500/10",
            // Success state
            success && "border-green-500/50 ring-2 ring-green-500/10",
            // Disabled state
            disabled && "opacity-50 cursor-not-allowed"
          )}
          animate={{
            scale: isFocused ? 1.005 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          {/* Leading Icon */}
          {LeadingIcon && (
            <motion.div
              className="pl-4 flex items-center"
              animate={{
                color: isFocused ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.5)",
              }}
            >
              <LeadingIcon className={cn(iconSizeClasses[size], "text-text-muted")} strokeWidth={1.5} />
            </motion.div>
          )}

          {/* Input Field */}
          <input
            ref={inputRef}
            type={inputType}
            disabled={disabled}
            className={cn(
              "flex-1 bg-transparent text-text-primary placeholder:text-text-muted",
              "focus:outline-none",
              "disabled:cursor-not-allowed",
              sizeClasses[size],
              LeadingIcon && "pl-2",
              (TrailingIcon || isPassword) && "pr-2",
              // Floating label padding
              label && "pt-4 pb-1",
              className
            )}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />

          {/* Floating Label */}
          <AnimatePresence>
            {label && (
              <motion.label
                className={cn(
                  "absolute left-4 pointer-events-none font-inter",
                  LeadingIcon && "left-11",
                  error ? "text-red-400" : success ? "text-green-400" : "text-text-muted"
                )}
                initial={false}
                animate={{
                  y: showFloatingLabel ? -10 : 0,
                  scale: showFloatingLabel ? 0.75 : 1,
                  opacity: showFloatingLabel ? 1 : 0.6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
              >
                {label}
              </motion.label>
            )}
          </AnimatePresence>

          {/* Password Toggle */}
          {isPassword && (
            <motion.button
              type="button"
              className="pr-4 flex items-center text-text-muted hover:text-text-secondary transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className={iconSizeClasses[size]} strokeWidth={1.5} />
              ) : (
                <Eye className={iconSizeClasses[size]} strokeWidth={1.5} />
              )}
            </motion.button>
          )}

          {/* Trailing Icon */}
          {TrailingIcon && !isPassword && (
            <div className="pr-4 flex items-center">
              <TrailingIcon className={cn(iconSizeClasses[size], "text-text-muted")} strokeWidth={1.5} />
            </div>
          )}

          {/* Status Icon */}
          {(error || success) && !isPassword && !TrailingIcon && (
            <motion.div
              className="pr-4 flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {error && <AlertCircle className={cn(iconSizeClasses[size], "text-red-400")} strokeWidth={1.5} />}
              {success && <CheckCircle2 className={cn(iconSizeClasses[size], "text-green-400")} strokeWidth={1.5} />}
            </motion.div>
          )}
        </motion.div>

        {/* Helper Text */}
        <AnimatePresence mode="wait">
          {(error || success || hint) && (
            <motion.p
              key={error || success || hint}
              className={cn(
                "mt-2 text-xs font-inter",
                error && "text-red-400",
                success && "text-green-400",
                hint && !error && !success && "text-text-muted"
              )}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {error || success || hint}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }
)
Input.displayName = "Input"

// Textarea variant with same styling
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  success?: string
  hint?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, success, hint, disabled, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)

    React.useImperativeHandle(ref, () => textareaRef.current!)

    const showFloatingLabel = label && (isFocused || hasValue)

    return (
      <div className="relative w-full">
        <motion.div
          className={cn(
            "relative rounded-xl transition-colors",
            "border bg-surface",
            isFocused && !error && "border-border-active ring-2 ring-white/5",
            !isFocused && !error && !success && "border-border-subtle hover:border-border",
            error && "border-red-500/50 ring-2 ring-red-500/10",
            success && "border-green-500/50 ring-2 ring-green-500/10",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          animate={{ scale: isFocused ? 1.005 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <textarea
            ref={textareaRef}
            disabled={disabled}
            className={cn(
              "w-full min-h-[120px] px-4 py-3 bg-transparent text-text-primary placeholder:text-text-muted",
              "focus:outline-none resize-none",
              "disabled:cursor-not-allowed",
              label && "pt-6",
              className
            )}
            onFocus={(e) => {
              setIsFocused(true)
              props.onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              props.onBlur?.(e)
            }}
            onChange={(e) => {
              setHasValue(e.target.value.length > 0)
              props.onChange?.(e)
            }}
            {...props}
          />

          {label && (
            <motion.label
              className={cn(
                "absolute left-4 top-3 pointer-events-none font-inter",
                error ? "text-red-400" : success ? "text-green-400" : "text-text-muted"
              )}
              animate={{
                y: showFloatingLabel ? -8 : 0,
                scale: showFloatingLabel ? 0.75 : 1,
                opacity: showFloatingLabel ? 1 : 0.6,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {label}
            </motion.label>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {(error || success || hint) && (
            <motion.p
              key={error || success || hint}
              className={cn(
                "mt-2 text-xs font-inter",
                error && "text-red-400",
                success && "text-green-400",
                hint && !error && !success && "text-text-muted"
              )}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {error || success || hint}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Input, Textarea }
