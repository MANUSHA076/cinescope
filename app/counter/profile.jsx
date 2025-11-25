import { getImageUrl } from "./utils";


function Avatar({ person, size ,onClick}) {
   //image format:<base url>/<image-is>/<extention>
   console.log("image URL: ", getImageUrl(person));
  return (
    <div onClick={()=> onClick(person.name)}>
    <img
      className="m-2.5 rounded-full"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      />
      </div>
  );
}

export default function Profile() {
   return (
     <div className="flex flex-row  w-3xl items-end rounded gap-4 bg-amber-200">
       <Avatar
         person={{
           name: "Lin Lanying",
           imageId: '1bX5QH6'
         }}
         size={100}
         onClick={(name) => alert(name)}
       />
       <Avatar
         person={{
           name: "L Lanying",
           imageId: 'YfeOqp2'
         }}
         size={80}
         onClick={(name) => alert(name)}
       />
       <Avatar
         person={{
           name: "Lin Lanying",
           imageId: '1bX5QH6'
         }}
         size={60}
         onClick={(name) => alert(name)}
       />

      </div>
  );
}
 


