using Microsoft.Extensions.FileSystemGlobbing.Internal.PathSegments;
using Microsoft.Maui.Controls.PlatformConfiguration.AndroidSpecific;
namespace CounselBot
{
    public partial class App : Microsoft.Maui.Controls.Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new MainPage();
            Current.On<Microsoft.Maui.Controls.PlatformConfiguration.Android>().UseWindowSoftInputModeAdjust(WindowSoftInputModeAdjust.Resize);
        }
    }
}
