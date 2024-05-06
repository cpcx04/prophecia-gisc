import sys
import json
import random


def calculate(data):
    # Devuelve un porcentaje aleatorio entre 1 y 100
    return random.randint(1, 100)


def select_random_items(data):
    # Selecciona entre 2 y 5 elementos aleatoriamente
    num_items = random.randint(2, 5)
    return random.sample(data["items"], num_items)


def main():
    # Ejemplo de lista de recomendaciones
    recommendations = [
        {"id": 1, "recomendacion": "Controlar la presión arterial regularmente."},
        {
            "id": 2,
            "recomendacion": "Mantener una dieta baja en sal y grasas saturadas.",
        },
        {
            "id": 3,
            "recomendacion": "Realizar ejercicio físico moderado, como caminar 30 minutos al día.",
        },
        {"id": 4, "recomendacion": "Evitar el consumo de tabaco y alcohol."},
        {
            "id": 5,
            "recomendacion": "Controlar los niveles de azúcar en sangre, especialmente si es diabético.",
        },
        {
            "id": 6,
            "recomendacion": "Consultar regularmente al médico para seguimiento de salud.",
        },
        {
            "id": 7,
            "recomendacion": "Tomar medicamentos prescritos para diluir la sangre si es necesario.",
        },
        {"id": 8, "recomendacion": "Mantener un peso saludable."},
        {
            "id": 9,
            "recomendacion": "Reducir el estrés a través de técnicas como la meditación o yoga.",
        },
        {
            "id": 10,
            "recomendacion": "Evitar largos períodos de inactividad o reposo en cama.",
        },
        {
            "id": 11,
            "recomendacion": "Participar en terapias de rehabilitación recomendadas por profesionales de la salud.",
        },
        {
            "id": 12,
            "recomendacion": "Utilizar ayudas técnicas (como bastones o andadores) si la movilidad está reducida.",
        },
        {
            "id": 13,
            "recomendacion": "Modificar el hogar para evitar caídas (como instalar barras de agarre en el baño).",
        },
        {
            "id": 14,
            "recomendacion": "Participar en actividades sociales para mejorar el bienestar emocional.",
        },
        {
            "id": 15,
            "recomendacion": "Aprender a reconocer los signos de un nuevo ictus y saber cómo actuar rápidamente.",
        },
    ]

    # Recibimos el objeto JSON como argumento
    input_json = sys.argv[1]
    data = json.loads(input_json)

    # Realizamos el cálculo de un porcentaje aleatorio
    result = calculate(data)

    # Seleccionamos recomendaciones aleatoriamente
    selected_items = select_random_items({"items": recommendations})

    # Formateamos la salida como JSON
    output = {"calculation_result": result, "selected_recommendations": selected_items}
    print(json.dumps(output))


if __name__ == "__main__":
    main()
