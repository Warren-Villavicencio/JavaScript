from abc import ABC, abstractmethod
import speech_recognition as sr
import pyttsx3
import random

# Single Responsibility Principle: Cada clase tiene una única responsabilidad

class VoiceRecognizer:
    def __init__(self):
        self.recognizer = sr.Recognizer()

    def listen(self):
        with sr.Microphone() as source:
            print("Escuchando...")
            audio = self.recognizer.listen(source)
        return audio

    def recognize(self, audio):
        try:
            return self.recognizer.recognize_google(audio, language="es-ES")
        except sr.UnknownValueError:
            return None
        except sr.RequestError as e:
            print(f"Error en la solicitud al servicio de reconocimiento de voz: {e}")
            return None

class VoiceSynthesizer:
    def __init__(self):
        self.engine = pyttsx3.init()

    def speak(self, text):
        self.engine.say(text)
        self.engine.runAndWait()

# Open/Closed Principle: Abierto para extensión, cerrado para modificación
class ResponseGenerator(ABC):
    @abstractmethod
    def generate_response(self, input_text):
        pass

class RandomResponseGenerator(ResponseGenerator):
    def __init__(self):
        self._responses = [
            "¡Guau guau!",
            "¡Woof woof!",
            "*Mueve la cola*",
            "*Te mira con ojos tiernos*",
            "*Ladra emocionada*"
        ]

    def generate_response(self, input_text):
        return random.choice(self._responses)

# Liskov Substitution Principle: Las subclases deben ser sustituibles por sus clases base
class DialogManager:
    def __init__(self, recognizer: VoiceRecognizer, synthesizer: VoiceSynthesizer, response_generator: ResponseGenerator):
        self.recognizer = recognizer
        self.synthesizer = synthesizer
        self.response_generator = response_generator
        self.is_active = False

    def start(self):
        self.is_active = True
        print("Diálogo iniciado. Habla con tu perrita.")
        self.run()

    def stop(self):
        self.is_active = False
        print("Diálogo detenido.")

    def run(self):
        while self.is_active:
            audio = self.recognizer.listen()
            text = self.recognizer.recognize(audio)
            if text:
                print(f"Has dicho: {text}")
                response = self.response_generator.generate_response(text)
                print(f"Perrita responde: {response}")
                self.synthesizer.speak(response)

# Interface Segregation Principle: Interfaces específicas son mejores que una interfaz general
class UserInterface(ABC):
    @abstractmethod
    def get_user_input(self):
        pass

    @abstractmethod
    def display_output(self, message):
        pass

class ConsoleInterface(UserInterface):
    def get_user_input(self):
        return input("Escribe 'iniciar' para comenzar el diálogo, 'detener' para terminarlo, o 'salir' para cerrar la aplicación: ")

    def display_output(self, message):
        print(message)

# Dependency Inversion Principle: Depender de abstracciones, no de concreciones
class PerritaInterpreteApp:
    def __init__(self, dialog_manager: DialogManager, user_interface: UserInterface):
        self.dialog_manager = dialog_manager
        self.user_interface = user_interface

    def run(self):
        while True:
            command = self.user_interface.get_user_input().lower()
            if command == 'iniciar':
                self.dialog_manager.start()
            elif command == 'detener':
                self.dialog_manager.stop()
            elif command == 'salir':
                self.user_interface.display_output("¡Hasta luego!")
                break
            else:
                self.user_interface.display_output("Comando no reconocido. Por favor, intenta de nuevo.")

def main():
    recognizer = VoiceRecognizer()
    synthesizer = VoiceSynthesizer()
    response_generator = RandomResponseGenerator()
    dialog_manager = DialogManager(recognizer, synthesizer, response_generator)
    user_interface = ConsoleInterface()
    app = PerritaInterpreteApp(dialog_manager, user_interface)
    app.run()

if __name__ == "__main__":
    main()
