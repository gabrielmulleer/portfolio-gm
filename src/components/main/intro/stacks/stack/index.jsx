export default function Stack(props){
const {name} = props;
console.log(name);
return (
    <li><img src={`assets/img/stacks/${name.toLowerCase()}.svg`} alt="" /></li>
    
)
}