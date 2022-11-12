import { Base } from "../components/core/base"

export const About = () =>{
return (

    <Base>
    <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
                    <div class="rounded-lg h-100 overflow-hidden">
                        <img alt="content" class="object-cover object-center h-full w-full"
                            src="../../Photos/MyPhotoCover.jpeg" />
                    </div>
                    <div class="flex flex-col sm:flex-row mt-10">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div
                                class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 " >
                                
                                        <img alt="content" class="object-cover object-center h-full w-full circle" src="https://images.pexels.com/photos/14339615/pexels-photo-14339615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                    
                                
                            </div>
                            <div class="flex flex-col items-center text-center justify-center">
                                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Aditya Kumar Singh</h2>
                                <div class="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                                <p class="text-base">Computer Science Student</p>
                            </div>
                        </div>
                        <div
                            class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p class="leading-relaxed text-lg mb-4">
                                I am Aditya Kumar Singh a computer science student from KIIT University passionate about Data Science & looking for an
                                opportunity to exploit my current skills and become a prominent Data Scientist. Good problem-solving skills and ability 
                                to perform well in a team. Seeking a challenging position as a Data Scientist in a well-established company that offers 
                                professional growth and ample opportunity to learn.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Base>
)
}