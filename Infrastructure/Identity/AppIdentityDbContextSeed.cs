using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (true)
            {
                var user = new AppUser
                {
                    DisplayName = "Huseyin",
                    Email = "huseyin@gmail.com",
                    UserName = "huseyinyalcinkaya",
                    Address = new Address
                    {
                        FirstName = "Hüseyin",
                        LastName = "Yalcinkaya",
                        Street = "100. yıl",
                        City = "karabük",
                        State = "safranbolu",
                        ZipCode = "78788"
                    }
                };

                await userManager.CreateAsync(user, "Sifre_123");
            }
        }
    }
}