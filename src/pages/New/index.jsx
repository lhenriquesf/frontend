import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";


export function New(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
      }

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");

    }

    function handleRemoveLinks(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }


    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }


    async function handleNewNote(){

        if(!title){
            alert("Digite o titulo da nota!")
        }

        if(newTag || newLink){
            alert("Campo preenchido mas nao adicionado, clicar em adicionar!");
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota criada com sucesso!");
        handleBack();
    }


    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText
                            title="Voltar"
                            onClick={handleBack}
                        />
                    </header>

                    <Input
                        placeholder="Titulo"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <TextArea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title='Links Uteis'>
                        {
                            links.map((link, index)=>(
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={()=>handleRemoveLinks(link)}
                                />
                            ))
                        }
                        <NoteItem
                            isNew
                            placeholder='Novo link'
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                        {
                            tags.map((tag, index)=>(
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={()=>handleRemoveTag(tag)}
                                /> 
                            ))
                        }
                        
                        <NoteItem
                            isNew
                            placeholder='Nova tag'
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                        />
                        </div>
                    </Section>
                    <Button title="Salvar" onClick={handleNewNote}/>
                </Form>
            </main>
        </Container>
    )
}
