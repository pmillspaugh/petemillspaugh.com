import { Select as BaseSelect } from "@base-ui/react/select";
import styles from "./Select.module.css";

interface SelectProps {
  placeholder: string;
  values: string[];
  value: string[];
  onChange?: (value: string[]) => void;
}

export default function Select({
  placeholder,
  values,
  value,
  onChange,
}: SelectProps) {
  function label(value: string[]) {
    if (value.length === 0) {
      return `Select ${placeholder}`;
    }

    if (value.length === values.length) {
      return `All ${placeholder}`;
    }

    const first = value[0];
    const more = value.length > 1 ? `+${value.length - 1}` : "";
    return `${first} ${more}`;
  }

  return (
    <BaseSelect.Root multiple value={value} onValueChange={onChange}>
      <BaseSelect.Trigger className={styles.trigger}>
        <BaseSelect.Value data-placeholder={placeholder}>
          {label}
        </BaseSelect.Value>
        <BaseSelect.Icon>
          <ChevronDownIcon />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>

      <BaseSelect.Portal>
        <BaseSelect.Positioner
          sideOffset={8}
          alignItemWithTrigger={false}
          className={styles.positioner}
        >
          <BaseSelect.Popup className={styles.popup}>
            {/* <BaseSelect.ScrollUpArrow /> */}
            <BaseSelect.List>
              {values.map((item) => (
                <BaseSelect.Item
                  key={item}
                  value={item}
                  className={styles.item}
                >
                  <BaseSelect.ItemIndicator className={styles.indicator}>
                    <CheckIcon className={styles.check} />
                  </BaseSelect.ItemIndicator>
                  <BaseSelect.ItemText className={styles.text}>
                    {item}
                  </BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
            {/* <Select.ScrollDownArrow /> */}
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}

function ChevronDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="currentColor"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      {...props}
    >
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}
