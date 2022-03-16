export const Title = (props) => {
  return (
    <div
      className='mb-3 title'
      data-aos='zoom-in'
      data-aos-delay='50'
      data-aos-duration='1000'>
      <h2>{props.children}</h2>
    </div>
  );
};
