using Microsoft.AspNetCore.Mvc;

namespace modulo2_semana6_api.Controllers;

[ApiController]
[Route("[controller]")]
public class ExercicioVerdadeiroFalsoController : ControllerBase
{
    [HttpGet("{tipo}")]
    public string Get(string tipo)
    {
        return "";
    }
}
