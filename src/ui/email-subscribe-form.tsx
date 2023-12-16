'use client';
const submitEmailForMailChimp = () => {
  alert('submitted');
}

export default function EmailSubscribeForm() {
  return (
    <form
      action="https://joelj.us17.list-manage.com/subscribe/post?u=c46f03c7a836863925e73b063&amp;id=3c5087667e&amp;f_id=00ea4ae0f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      noValidate={true}>
      <label htmlFor="subscr-email" className="form-label">Subscribe to my newsletter</label>
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input
          type="text"
          name="b_c46f03c7a836863925e73b063_3c5087667e"
          value=""
          readOnly={true} />
      </div>
      <div className="input-group">
        <input type="email" name="EMAIL" className="form-control rounded-start ps-5" placeholder="Your email" id="mce-EMAIL" />
        <i className="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"></i>
        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary" />
      </div>
    </form>
  );
}