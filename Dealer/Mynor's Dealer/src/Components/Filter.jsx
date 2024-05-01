import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

const Filter = () => {
    const animals = ["leon", "tigre", "oso", "jirafa", "elefante", "cebra", "hipopotamo", "cocodrilo", "mono", "pajaro", "serpiente", "tortuga", "pinguino", "delfin", "ballena", "tiburon", "pulpo", "medusa", "estrella de mar", "caballo", "vaca", "cerdo", "oveja", "gallina"];
    return (
        <div>
            <section className="flex items-center justify-center mt-3 mb-[10rem] bg-White">
                <div className="flex justify-center items-center w-fit h-fit p-5 px-10 bg-White shadow-xl gap-x-[5rem] rounded-[3rem]">
                    <div className="h-fit">
                        <Autocomplete
                            label="Year"
                            className="TextFilter"
                        >
                            {animals.map((animal) => (
                                <AutocompleteItem key={animal} value={animal}>
                                    {animal}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>
                    </div>
                    <div>
                        <Autocomplete
                            label="Brand"
                            className="TextFilter"
                        >
                            {animals.map((animal) => (
                                <AutocompleteItem key={animal} value={animal}>
                                    {animal}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>
                    </div>
                    <div>
                        <Autocomplete
                            label="Model"
                            className="TextFilter"
                        >
                            {animals.map((animal) => (
                                <AutocompleteItem key={animal} value={animal}>
                                    {animal}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Filter