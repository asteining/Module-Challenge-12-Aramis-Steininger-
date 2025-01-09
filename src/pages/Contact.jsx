import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(`Message sent: ${JSON.stringify(data)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('name', { required: true })} placeholder="Name" />
      {errors.name && <p>Name is required</p>}

      <input type="email" {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Email" />
      {errors.email && <p>Valid email is required</p>}

      <textarea {...register('message', { required: true })} placeholder="Message"></textarea>
      {errors.message && <p>Message is required</p>}

      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
