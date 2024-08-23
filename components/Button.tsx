import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

const Button = ({type, title, icon, variant, full,} : ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-lg border ${variant} ${full && 'w-full'}`} type={type}>
        <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
        {icon && <Image src={icon} alt={title} width={12} height={12} />}
    </button>
  )
}

export default Button