using Microsoft.AspNetCore.Mvc;

namespace modulo2_semana6_api.Controllers;

[ApiController]
[Route("[controller]")]
public class ExercicioEmailController : ControllerBase
{
    [HttpGet("{email}")]
    public string Get(string email)
    {
        return "";
    }
}
