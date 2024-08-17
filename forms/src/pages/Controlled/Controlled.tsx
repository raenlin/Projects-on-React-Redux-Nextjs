import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../state/store';
import { setControlledImage, submitControlled } from '../../state/formSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../../validations/formValidation';
import { MyForm } from '../../components/Form/Form.type';

export default function Controlled() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<MyForm>({ mode: 'onChange', resolver: yupResolver(formSchema) });

  const submit: SubmitHandler<MyForm> = async (data) => {
    const file = data.image[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      dispatch(setControlledImage(base64String));
    };

    reader.readAsDataURL(file);
    dispatch(submitControlled(data));
    const isValid = await formSchema.isValid(data);

    if (isValid) {
      navigate('/');
    }
  };

  return (
    <div className="form_wrapper">
      <h2>Controlled form</h2>
      <Form register={register} handleSubmit={handleSubmit(submit)} errors={errors} />
      <div className="button_back">
        <Link to="/ ">Back to main</Link>
      </div>
    </div>
  );
}