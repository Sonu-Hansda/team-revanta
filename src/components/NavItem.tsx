interface INavItems{
    label : String
}
export default function(props:INavItems){
    return (
        <li className="my-2 md:my-0 text-lg md:text-xs hover:text-slate-800 md:hover:text-green-400 hover:underline underline-offset-4 hover:cursor-pointer transition-all duration-300 ease-linear">{props.label}</li>
    );
}