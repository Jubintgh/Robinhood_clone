import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpPreferencesForm = () => {
const [errors, setErrors] = useState([]);
  const user_id = state.session.user.id;
  const [about, setAbout] = useState('');
  const [weight_class, setWeight_class] = useState('');
  const [reach, setReach] = useState('');
  const [professional_level, setProfessional_level] = useState('');
  const [current_record, setCurrent_record] = useState('0-0-0');
  const [previous_titles, setPrevious_titles] = useState('');
  const [fav_rocky_fighter, setFav_rocky_fighter] = useState('');
  const [walkout_song, setWalkout_song] = useState('');
  const [vaccinated, setVaccinated] = useState('');
  const [has_kids, setHas_kids] = useState('');
  const [in_person, setIn_person] = useState('');
  const [nickname, setNickname] = useState('');
  const [religion, setReligion] = useState('');
  const [pets, setPets] = useState('');
  const [availability, setAvailability] = useState('');
  const [rate, setRate] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

//   weight_class = db.Column(db.VARCHAR(100), nullable=False)
//   reach = db.Column(db.Integer, nullable=False)
//   professional_level = db.Column(db.VARCHAR(100), nullable=False)
  pets = db.Column(db.VARCHAR)

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateAge = (e) => {
    setAge(e.target.value);
  };

  const updateLocation = (e) => {
    setLocation(e.target.value);
  };

  const updateGender = (e) => {
    setGender(e.target.value);
  };

  const updateCoach = (e) => {
    setCoach(e.target.value);
  };

  const updateImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          onChange={updateFirstName}
          value={first_name}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          onChange={updateLastName}
          value={last_name}
        ></input>
      </div>
      <div>
        <label>Age</label>
        <input
          type='integer'
          name='age'
          onChange={updateAge}
          value={age}
        ></input>
      </div>
        <div>
        <label>Location</label>
        <input
          type='string'
          name='location'
          onChange={updateLocation}
          value={location}
        ></input>
      </div>
      <div>
        <label>Gender</label>
        <input
          type='integer'
          name='gender'
          onChange={updateGender}
          value={gender}
        ></input>
      </div>
      <div>
        <label>Coach</label>
        <input
          type='boolean'
          name='coach'
          onChange={updateCoach}
          value={coach}
        ></input>
      </div>
      <div>
        <label>Image URL</label>
        <input
          type='string'
          name='imageurl'
          onChange={updateImageUrl}
          value={image_url}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Location</label>
        <input
          type='integer'
          name='location'
          onChange={updateLocation}
          value={location}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpPreferencesForm;