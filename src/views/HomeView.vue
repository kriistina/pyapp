<template>
  <div>
    <div class="image-container">
      <h1 class="tekst p-4">Dobrodošli na našu stranicu posvećenu učenju Pythona!</h1>
      <img src="https://miro.medium.com/v2/resize:fit:800/1*WWrXceae4H_klzpPU6h7Hg.png" alt="Dobrodošli">
      <v-btn class="start-btn" @click="scrollToPythonTask">ZAPOČNIMO!</v-btn>
    </div>

    <div>
      <hr /><br>
      <p class="tekst">
        Dobrodošli u našu interaktivnu platformu za učenje Pythona! Ovdje ćete dobiti priliku riješiti
        raznovrsne zadatke iz područja Python programiranja. Vaš zadatak je jednostavan - pokušajte riješiti
        postavljeni zadatak koristeći vaše znanje Pythona. Bez obzira jeste li početnik ili napredni programer,
        uvijek ima prostora za učenje i poboljšanje vaših vještina.
        Kada unesete vaše rješenje, provjeriti ćemo vaš kod i dati vam povratne informacije o
        ispravnosti rješenja. Ne brinite ako ne uspijete na prvi pokušaj - naš cilj je pružiti vam podršku i
        pomoći vam u svladavanju Python programiranja.
        Započnite rješavati zadatke, istražujte Python svijet i naučite nove koncepte. Vaš napredak je naš
        uspjeh!
      </p><br>
      <hr /><br>
      <h2 class="tekst">Sretno i uživajte u učenju!</h2><br><hr />
    </div>
  
    <br><br><br>
    <div id="python-task" class="python-task" >
      <button @click="sendMessage" class="pytask-btn">Klikni za Python zadatak:</button><br><br>
  
      <p style="margin-left: 20px;">{{ task }}</p><br><br>
      <v-textarea v-model="code" rows="15" cols="50" placeholder="Unesite svoj kod ovdje"
      bg-color="grey-lighten"
      color="cyan"
    ></v-textarea>
  
      <button @click="sendCode" class="pytask-btn " >Pošalji</button>
      <p v-if="feedback" style="margin: 20px;">{{ feedback }}</p>
    </div><br><br>
    <hr /><br><br>
    <div class="container image-grid">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="2"
          v-for="slika in slike"
          :key="slika.imgPath"
        >
          
            <v-img class="white--text align-end" height="150px" :src="slika.imgPath"></v-img>
         
        </v-col>
      </v-row>
    </div>
    <br /><br /><br />
  </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      task: '', 
      code: '', 
      feedback: '', 
      slike: [
        {
          imgPath:
            "https://i.ytimg.com/vi/94UHCEmprCY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAw2uLPbghg6GtHA4vjJK3bGXDmGg",
        },
        {
          imgPath:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa2tK9I6zIVzPVtaCK9wR1Vs1LtFk6Qv5iw&s",
        },
        {
          imgPath:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-ki3_vPhWUdgPgiSEFQCoP3iF3gJHVcU7A&s",
        },
        {
          imgPath:
            "https://www.feuga.es/wp-content/uploads/2023/01/python-curso-1024x576.jpg",
        },
        {
          imgPath:
            "https://k21academy.com/wp-content/uploads/2021/10/python-features.jpg",
        },
        {
          imgPath:
            "https://www.freecodecamp.org/news/content/images/2022/04/virtual-env-python.png",
        },
        {
          imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20240304152903/python-tutorial-2.webp",
        },
        {
          imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20230605074523/What-is-Python.webp",
        },
        {
          imgPath:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbkkKbqv6_yC0g2IUCTdLwjOjUdxl3w8hpA&s",
        },
        {
          imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20240430181610/Operators-in-python.webp",
        },
        {
          imgPath:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGD09QxPIQt0bEzkPlY155O7qBbpxY0OYGjWMnZ-r2-2JiS7tqlOktC1j0z5Ms9AYUmoM&usqp=CAU",
        },
        {
          imgPath:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-UMny-ifMxcxAwCg3M_uq8T63cnOohKkkfA&s",
        }
  
      ],
    }
  },
  methods: {
    async sendMessage() {
      try {
        
        this.task = '';
        this.code = '';
        this.feedback = '';
  

        const apiKey = "sk-proj-LgZpAm29cclMuOPfyYWmT3BlbkFJ37mV0D9eNk3gYguYKYJs";
        const data = {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: "Generiraj Python zadatak." } 
          ]
        };
  
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify(data)
        });
  
        const result = await response.json();
        this.task = result.choices[0].message.content; 
        this.scrollToPythonTask();
      } catch (error) {
        console.error('Greška prilikom slanja upita:', error);
      }
    },
    async sendCode() {
      try {
        const apiKey = "sk-proj-LgZpAm29cclMuOPfyYWmT3BlbkFJ37mV0D9eNk3gYguYKYJs";
        const data = {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Pogledajte moje rješenje i dajte mi povratnu informaciju:\n\n"${this.task}"\n\nMolim vas, provjerite je li moj kod ispravan u vezi s postavljenim zadatkom.\n\nEvo mog koda:\n\n\`\`\`python\n${this.code}\n\`\`\`\n  Molim vas, recite mi ako trebam napraviti bilo kakve promjene.\n`
            }
          ]
        };
  
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify(data)
        });
  
        const result = await response.json();
        this.feedback = result.choices[0].message.content; 
      } catch (error) {
        console.error('Greška prilikom slanja upita:', error);
      }
    },
    scrollToPythonTask() {
      const pythonTaskElement = document.getElementById('python-task');
      pythonTaskElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  }
  </script>
  
  <style scoped>
  .image-container {
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  }
  
  .tekst {
  color: rgb(4, 4, 84);
  margin: 20px;
  }
  
  .start-btn {
  position: absolute;
  bottom: 90px;
  right: 250px;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  }
  
  .start-btn:hover {
  background-color: #0056b3;
  }
  
  .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  }
  
  .image-grid {
  width: 100%;
  }
  
  .pytask-btn {
  background-color: #e1e100;
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  color: #0056b3;
  font-weight: bold;
  }
  
  .python-task{
  padding:10pt;
  max-width: 800px;
  }
  
  </style>