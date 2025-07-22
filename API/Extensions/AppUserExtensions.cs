using System;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using API.Services;

namespace API.Extensions;

public static class AppUserExtensions
{
    public static UserDto AsDto(this AppUser user, ITokenService tokenService)
    {
        return new UserDto
        {
            Id = user.Id,
            Email = user.Email,
            DisplayName = user.DisplayName,
            ImageUrl = null,
            Token = tokenService.CreateToken(user)
        };
    }
}
