interface INavItems{
    lable : String
}
export default function(props:INavItems){
    return (
        <li className="hover:text-green-400 hover:underline underline-offset-4 hover:cursor-pointer transition-all duration-300 ease-linear">{props.lable}</li>
    );
}