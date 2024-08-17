import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../state/store';
import { submitUncontrolled } from '../../state/formSlice';
import { formSchema } from '../../Validations/formValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../../components/Form/Form';
import { MyForm } from '../../components/Form/Form.type';

export default function Uncontrolled() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<MyForm>({ mode: 'onSubmit', resolver: yupResolver(formSchema) });

  const submit: SubmitHandler<MyForm> = async (data) => {
    dispatch(submitUncontrolled(data));
    const isValid = await formSchema.isValid(data);

    if (isValid) {
      navigate('/');
    }
  };

  return (
    <div className="form_wrapper">
      <h2>Uncontrolled form</h2>
      <Form register={register} handleSubmit={handleSubmit(submit)} errors={errors} />
      <div className="button_back">
        <Link to="/ ">Back to main</Link>
      </div>
    </div>
  );
}
