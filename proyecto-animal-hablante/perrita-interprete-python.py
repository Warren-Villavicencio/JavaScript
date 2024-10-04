import speech_recognition as sr
import pyttsx3
import random

class PerritaInterprete:
    def __init__(self):
        self.recognizer = sr.Recognizer()
        self.engine = pyttsx3.init()
        self.dialogando = False
        selfְ̌_respuestasְֿ_perrita = [
            "¡Guau guau!",
            "¡Woof woof!",
            "*Mueve la cola*",
            "*Te mira con ojos tiernos*",
            "*Ladra emocionada*"
        ]

    def iniciar_dialogo(self):
        self.dialogando = True
        print("Diálogo iniciado. Habla con tu perrita.")
        self.escuchar_y_responder()

    def detener_dialogo(self):
        self.dialogando = False
        print("Diálogo detenido.")

    def escuchar_y_responder(self):
        while self.dialogando:
            try:
                with sr.Microphone() as source:
                    print("Escuchando...")
                    audio = self.recognizer.listen(source)
                    texto = self.recognizer.recognize_google(audio, language="es-ES")
                    print(f"Has dicho: {texto}")
                    self.responder(texto)
            except sr.UnknownValueError:
                print("No se pudo entender el audio")
            except sr.RequestError as e:
                print(f"Error en la solicitud al servicio de reconocimiento de voz: {e}")

    def responder(self, texto):
        respuesta = random.choice(self._respuestas_perrita)
        print(f"Perrita responde: {respuesta}")
        self.engine.say(respuesta)
        self.engine.runAndWait()

def main():
    perrita = PerritaInterprete()
    while True:
        comando = input("Escribe 'iniciar' para comenzar el diálogo, 'detener' para terminarlo, o 'salir' para cerrar la aplicación: ")
        if comando.lower() == 'iniciar':
            perrita.iniciar_dialogo()
        elif comando.lower() == 'detener':
            perrita.detener_dialogo()
        elif comando.lower() == 'salir':
            print("¡Hasta luego!")
            break
        else:
            print("Comando no reconocido. Por favor, intenta de nuevo.")

if __name__ == "__main__":
    main()
