using Microsoft.AspNetCore.Mvc;

namespace modulo2_semana6_api.Controllers;

[ApiController]
[Route("[controller]")]
public class ExercicioSomaController : ControllerBase
{
    [HttpGet("{valorA}/{valorB}")]
    public string Get(int valorA, int valorB)
    {
        return "";
    }
}
