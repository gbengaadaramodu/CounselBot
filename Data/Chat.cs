using SQLite;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CounselBot.Data
{
    public class Chat
    {

        [PrimaryKey, AutoIncrement]
        public int Id { get; set; }
        public string UniqueId { get; set; }
        public string? Title { get; set; }
        public string? Message { get; set; }
        public DateTime CreateOn { get; set; }
        public DateTime? ModifiedOn { get; set; }
    }
}
