import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../store/profile";

export const ProfileForm = ({ firstName, lastName, phone }) => {
  const [form, setForm] = useState({ firstName, lastName, phone });

  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Profile form</h1>

      <div>
        <input
          value={form.firstName}
          placeholder="firstName"
          data-name="firstName"
          onChange={handleChangeForm}
        />
        <input
          value={form.lastName}
          placeholder="lastName"
          data-name="lastName"
          onChange={handleChangeForm}
        />
        <input
          value={form.phone}
          placeholder="phone"
          data-name="phone"
          onChange={handleChangeForm}
        />

        <button onClick={() => dispatch(updateProfile(form))}>save</button>
      </div>
    </div>
  );
};
