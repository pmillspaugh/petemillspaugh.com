import * as RadixVisuallyHidden from "@radix-ui/react-visually-hidden";

const VisuallyHidden = ({ children }) => {
  return (
    <RadixVisuallyHidden.Root data-pagefind-ignore>
      {children}
    </RadixVisuallyHidden.Root>
  );
};

export default VisuallyHidden;
