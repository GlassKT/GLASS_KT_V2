interface ToggleProps {
  onToggle?: (on: boolean) => void;
  children: React.ReactNode;
}

interface ToggleContextType {
  on: boolean;
  toggle: () => void;
}
