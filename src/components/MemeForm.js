import React from 'react';

export default function MemeForm(props) {
  // react fragment '<></>' works like a placeholder div

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setState({
      ...props.state,
      [name]: value,
    });
  };
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='line1'> Top : </label>
        <input
          type='text'
          value={props.state.line1Text}
          className='form-group'
          name='line1Text'
          id='line1'
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='line2'> Bottom : </label>
        <input
          type='text'
          value={props.state.line2Text}
          className='form-group'
          name='line2Text'
          id='line2'
          onChange={handleInputChange}
        ></input>
      </div>
    </form>
  );
}
