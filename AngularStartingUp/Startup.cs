using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularStartingUp.Startup))]
namespace AngularStartingUp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
