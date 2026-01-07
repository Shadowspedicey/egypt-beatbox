using EgyptBeatbox.Domain.Shared;

namespace EgyptBeatbox.Domain.Entities.Events
{
	public class Event : Entity<int>
	{
		public EventName Name { get; private set; }
		protected Event() { }
		public Event(EventName name)
		{
			Name = name;
		}
	}
}
