
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "#EF4444", // OnlyDance red
					foreground: "#FFFFFF",
					50: "#FEF2F2",
					100: "#FEE2E2",
					200: "#FECACA",
					300: "#FCA5A5",
					400: "#F87171",
					500: "#EF4444",
					600: "#DC2626",
					700: "#B91C1C",
					800: "#991B1B",
					900: "#7F1D1D",
				},
				secondary: {
					DEFAULT: "#64748B", // OnlyDance secondary
					foreground: "#FFFFFF",
					50: "#F8FAFC",
					100: "#F1F5F9",
					200: "#E2E8F0",
					300: "#CBD5E1",
					400: "#94A3B8",
					500: "#64748B",
					600: "#475569",
					700: "#334155",
					800: "#1E293B",
					900: "#0F172A",
				},
				tertiary: {
					DEFAULT: "#10B981", // OnlyDance tertiary
					foreground: "#FFFFFF",
					50: "#ECFDF5",
					100: "#D1FAE5",
					200: "#A7F3D0",
					300: "#6EE7B7",
					400: "#34D399",
					500: "#10B981",
					600: "#059669",
					700: "#047857",
					800: "#065F46",
					900: "#064E3B",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				// OnlyDance specific colors
				"onlydance": {
					red: "#EF4444",
					gray: "#64748B",
					green: "#10B981",
					surface: "#FAFAFA",
					"on-surface": "#1C1C1C",
				},
			},
			borderRadius: {
				lg: "12px", // OnlyDance border radius
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"], // OnlyDance font
			},
			fontSize: {
				// OnlyDance font sizes
				"display-large": ["57px", { lineHeight: "64px", fontWeight: "400" }],
				"display-medium": ["45px", { lineHeight: "52px", fontWeight: "400" }],
				"display-small": ["36px", { lineHeight: "44px", fontWeight: "600" }],
				"headline-large": ["32px", { lineHeight: "40px", fontWeight: "400" }],
				"headline-medium": ["24px", { lineHeight: "32px", fontWeight: "500" }],
				"headline-small": ["22px", { lineHeight: "28px", fontWeight: "700" }],
				"title-large": ["22px", { lineHeight: "28px", fontWeight: "500" }],
				"title-medium": ["18px", { lineHeight: "24px", fontWeight: "500" }],
				"title-small": ["16px", { lineHeight: "24px", fontWeight: "500" }],
				"body-large": ["16px", { lineHeight: "24px", fontWeight: "400" }],
				"body-medium": ["14px", { lineHeight: "20px", fontWeight: "400" }],
				"body-small": ["12px", { lineHeight: "16px", fontWeight: "400" }],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
