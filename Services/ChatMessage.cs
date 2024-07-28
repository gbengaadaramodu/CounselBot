using CounselBot.Data;
using SQLite;

namespace ChatBot.Services
{

    public interface IChatMessage
    {
        Task<int> SaveChat(Chat chat);
        Task<int> UpdateChat(Chat chat);
        Task<int> DeleteChat(Chat chat);
        Task<int> DeleteAllChat();
        Task<List<Chat>> GetAllChats();
        Task<Chat> GetChatById(int chatId);

    }
    public class ChatMessage : IChatMessage
    {
        private SQLiteAsyncConnection _context;
        public ChatMessage(/*SQLiteAsyncConnection context*/)
        {
            //_context = context; 
            SetUpDbAsync();
        }

        private async Task SetUpDbAsync()
        {
            if (_context == null)
            {
                var dbPath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "chat.db3");
                _context = new SQLiteAsyncConnection(dbPath);
                await _context.CreateTableAsync<Chat>();
            }
        }

        public async Task<int> DeleteChat(Chat chat)
        {
            try
            {
                return await _context.DeleteAsync(chat);
            }
            catch(Exception ex){
                return 0;    
            }
        }
        public async Task<int> DeleteAllChat()
        {
            try
            {
                var chats = await _context.Table<Chat>().ToListAsync();
                if(chats.Count > 0)
                {
                    foreach(var chat in chats)
                    {
                        await _context.DeleteAsync(chat);
                    }
                }
                return 1;
            }
            catch(Exception ex){
                return 0;    
            }
        }

        public async Task<List<Chat>> GetAllChats()
        {
            try
            {
                return await _context.Table<Chat>().ToListAsync();
            }
            catch(Exception ex)
            {
                return new List<Chat>();    
            }
        }

        public async Task<Chat> GetChatById(int chatId)
        {
            try
            {
                var chat = await _context.QueryAsync<Chat>($"SELECT * FROM {nameof(Chat)} WHERE Id ={chatId} ");

                return chat.FirstOrDefault();
            }
            catch (Exception ex)
            {
                return new Chat();
            }
        }

        public async Task<int> SaveChat(Chat chat)
        {
            try
            {
                return await _context.InsertAsync(chat);
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public async Task<int> UpdateChat(Chat chat)
        {
            try
            {
                return await _context.UpdateAsync(chat);
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
