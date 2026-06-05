import VisuallyHidden from "@/components/VisuallyHidden";

export const NEWSLETTER_HONEYPOT_FIELD = "lastname";

const NewsletterHoneypot = () => {
  return (
    <VisuallyHidden aria-hidden="true">
      <label htmlFor={NEWSLETTER_HONEYPOT_FIELD}>Last name</label>
      <input
        id={NEWSLETTER_HONEYPOT_FIELD}
        name={NEWSLETTER_HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </VisuallyHidden>
  );
};

export default NewsletterHoneypot;
