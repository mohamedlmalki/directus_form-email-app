import { createDirectus, rest, createItem } from "@directus/sdk"
const client = createDirectus('https://ossmesf.directus.app/').with(rest());

const handleSubmit = async (formData) => {
  'use server';

  const full_name = formData.get('full_name');
  const email_address = formData.get('email_address');

  try {
    await client.request(
      createItem('user_data', {
        full_name,
        email_address,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export default function Home() {
  // handleSubmit function to be here

return (
    <main>
      <form action={handleSubmit}>
        <h1>User Data Form</h1>
        <p>Please fill in your details below</p>
        <div className='form-flex'>
          <label htmlFor='name'>Full Name</label>
          <input id='name' name='full_name' required />
        </div>
        <div className='form-flex'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email_address' id='email' required />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
}