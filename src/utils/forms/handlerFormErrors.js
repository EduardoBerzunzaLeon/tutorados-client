import { LabelErrorInput } from '../../components/labelErrorInput/LabelErrorInput';

// Change a specific error, work it with react-hook-form
export const createErrorsArray = (errors, errorsTranslate, setError) => {
  const errorsArray = errors.split('.');
  const keys = Object.keys(errorsTranslate);

  errorsArray.forEach((error) => {
    keys.forEach((key) => {
      if (error.includes(errorsTranslate[key])) {
        setError(key, { type: 'manual', message: error });
      }
    });
  });
};

export const getFormErrorMessage = (name, errors) => {
  return (
    errors[name] && <LabelErrorInput id={name} message={errors[name].message} />
  );
};
