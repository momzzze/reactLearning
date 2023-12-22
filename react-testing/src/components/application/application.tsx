const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Fullname"/>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="FR">France</option>
            <option value="GR">Germany</option>
            <option value="IT">Italy</option>
            <option value="ES">Spain</option>
            <option value="RU">Russia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" data-testid="terms" id="terms" /> I agree to
            the terms and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Application;
